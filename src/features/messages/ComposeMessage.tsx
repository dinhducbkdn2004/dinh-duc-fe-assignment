import { useState } from 'react';
import {
  Input,
  Textarea,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Select,
} from '@/components/ui';
import type { Message, MessageCategory } from '@/types';
import { useUser } from '@/contexts';
import { mockUsers } from '@/mocks';
import { Send } from 'lucide-react';

interface ComposeMessageProps {
  isOpen: boolean;
  onSend: (message: Omit<Message, 'id' | 'date'>) => void;
  onClose: () => void;
}

const ComposeMessage = ({ isOpen, onSend, onClose }: ComposeMessageProps) => {
  const { currentUser } = useUser();
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<MessageCategory>('general');

  const handleSubmit = () => {
    if (!to.trim() || !subject.trim() || !content.trim()) {
      return;
    }

    const selectedUser = mockUsers.find((user) => user.id === to);
    const recipientName = selectedUser ? selectedUser.name : to;

    onSend({
      from: currentUser.name,
      recipients: [recipientName],
      subject: subject.trim(),
      content: content.trim(),
      category,
      tags: [],
      isRead: false,
    });

    setTo('');
    setSubject('');
    setContent('');
    setCategory('general');
  };

  const isValid = to.trim() && subject.trim() && content.trim();

  return (
    <Modal isOpen={isOpen} onClose={onClose} className='w-[782px] h-[550px]'>
      <ModalHeader onClose={onClose} className='h-11 px-4 bg-primary text-white'>
        <h2 className='text-base font-semibold'>Compose:</h2>
      </ModalHeader>

      <ModalBody className='p-4 space-y-3'>
        <div className='grid grid-cols-2 gap-3'>
          <Select label='To:' value={to} onChange={(e) => setTo(e.target.value)} required>
            <option value=''>Select recipient</option>
            {mockUsers.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </Select>
          <Input label='From:' type='text' value={currentUser.name} disabled />
        </div>

        <Input
          label='Subject:'
          type='text'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder='Nutrition Counseling'
          required
        />

        <Select
          label='Category:'
          value={category}
          onChange={(e) => setCategory(e.target.value as MessageCategory)}
        >
          <option value='general'>General</option>
          <option value='appointment'>Appointment</option>
          <option value='reminder'>Reminder</option>
          <option value='urgent'>Urgent</option>
        </Select>

        <Textarea
          label='Message:'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Type your message here...'
          rows={6}
          required
        />
      </ModalBody>

      <ModalFooter className='h-[72px] px-4 flex justify-end items-center gap-3'>
        <Button type='button' onClick={onClose} variant='outline' size='md'>
          Cancel
        </Button>
        <Button
          type='button'
          onClick={handleSubmit}
          disabled={!isValid}
          variant='primary'
          size='md'
        >
          Send
          <Send size={16} />
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ComposeMessage;
