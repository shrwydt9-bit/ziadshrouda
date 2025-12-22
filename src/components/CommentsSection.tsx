import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageCircle, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface Comment {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

const CommentsSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch initial comments
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) {
        console.error('Error fetching comments:', error);
        return;
      }

      setComments(data || []);
    };

    fetchComments();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('comments-realtime')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'comments',
        },
        (payload) => {
          setComments((prev) => [payload.new as Comment, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      toast.error('الرجاء إدخال الاسم والرسالة');
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from('comments').insert({
      name: name.trim(),
      message: message.trim(),
    });

    if (error) {
      console.error('Error adding comment:', error);
      toast.error('حدث خطأ أثناء إرسال التعليق');
    } else {
      toast.success('تم إرسال التعليق بنجاح! 🎉');
      setName('');
      setMessage('');
    }

    setIsSubmitting(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ar-EG', {
      hour: '2-digit',
      minute: '2-digit',
      day: 'numeric',
      month: 'short',
    }).format(date);
  };

  return (
    <section id="comments" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-primary text-glow mb-4">
            💬 اترك رسالة
          </h2>
          <p className="text-muted-foreground font-cairo text-lg">التعليقات تظهر في الوقت الحقيقي للجميع!</p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mt-4" />
        </motion.div>

        {/* Comment Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass gradient-border rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <Input
                placeholder="اسمك ✨"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-secondary/50 border-border/50 font-cairo text-right"
                dir="rtl"
              />
            </div>
          </div>
          
          <Textarea
            placeholder="اكتب رسالتك هنا... 📝"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-secondary/50 border-border/50 font-cairo text-right min-h-[100px] mb-4"
            dir="rtl"
          />
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full md:w-auto font-cairo bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? 'جاري الإرسال...' : 'إرسال التعليق'}
          </Button>
        </motion.form>

        {/* Comments List */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <MessageCircle className="w-5 h-5" />
            <span className="font-cairo">{comments.length} تعليق</span>
          </div>

          <AnimatePresence>
            {comments.map((comment, index) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass rounded-xl p-4 border border-border/30 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="flex-1 text-right" dir="rtl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-primary font-cairo">{comment.name}</span>
                      <span className="text-xs text-muted-foreground font-cairo">
                        {formatDate(comment.created_at)}
                      </span>
                    </div>
                    <p className="text-foreground font-cairo leading-relaxed">{comment.message}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {comments.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-muted-foreground font-cairo"
            >
              <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>لا توجد تعليقات بعد. كن أول من يعلق! 🚀</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
