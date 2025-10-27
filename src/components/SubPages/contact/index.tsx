// components/ContactForm.tsx
import { Input } from '@/components/Input';
import { useLocalization } from '@/hooks/LocalizationProvider';
import { useState } from 'react';

export const ContactForm = ()=>{
    const {content:{pages}} =useLocalization()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input.Root>
        <Input.Label text={pages.contact.name}/>
        <Input.Field>
            <Input.Input
            type="text"
            name='title'
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
            />
        </Input.Field>
      
        <Input.Label text={pages.contact.yourEmail}/>
        <Input.Field>
            <Input.Input
            name='email'
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
            />
        </Input.Field>
      
        <Input.Label text={pages.contact.subject}/>
        <Input.Field>
            <Input.Input
            type="text"
            name='subject'
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            required
            />
        </Input.Field>
      
        <Input.Label text={pages.contact.message} />
        <Input.Field>
          <Input.TextArea 
            name='message'
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            required
            rows={5}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </Input.Field>
      </Input.Root>
        <Input.Root >
            <Input.Button  type="submit" text={pages.contact.send}/>
        </Input.Root>
    </form>
  );
}
