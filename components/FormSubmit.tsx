/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RG2Lqo6Pj9k
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {motion} from 'framer-motion'
import emailjs from "@emailjs/browser";

import { useRef, useState, ChangeEvent, FormEvent } from "react";


interface FormState {
  name: string;
  email: string;
  message: string;
}
export default function Formsubmit() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        "service_g7cm3nh",
        "template_weylun7",
        {
          from_name: form.name,
          to_name: "Goapl",
          from_email: form.email,
          to_email: "gopalhelpyou@gmail.com",
          message: form.message,
        },
        "6AQLK2cX6JKyVgFdO"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message 😃");
          setCurrentAnimation("idle");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");
          alert("I didn't receive your message 😢");
        }
      );
  };
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div
          
      className=" space-y-4">
        <h3 className=" text-center font-bold">Get in Touch</h3>
        <motion.p 
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:100}}
         transition={{duration:1}}className="text-muted-foreground">
          Have a question or want to work together? Fill out the form below and we'll get back to you as soon as
          possible.
        </motion.p>
        <form className="space-y-4"  ref={formRef}
          onSubmit={handleSubmit}>
          <motion.div 
           animate={{opacity:1,y:0}}
           initial={{opacity:0,y:-100}}
           transition={{duration:1}}
          className="flex flex-col">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
               type='text'
               name='name'
               className='input'
               required
               value={form.name}
               onChange={handleChange}
               onFocus={handleFocus}
               onBlur={handleBlur}
              id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type='email'
                name='email'
                className='input'
                placeholder='exampl@gmail.com'
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur} id="email" />
            </div>
          <div className="space-y-2 mb-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
             name='message'
             rows={4}
            
             placeholder='Write your Message here...'
             value={form.message}
             onChange={handleChange}
             onFocus={handleFocus}
             onBlur={handleBlur}
              className="min-h-[120px]" />
          </div>
          <Button  type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}>
           {loading ? "Sending..." : "Submit"}
          </Button>
          </motion.div>
        </form>
      </div>
    </div>
  )
}