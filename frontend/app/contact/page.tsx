import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600 text-sm">35/1 Siddheswari Circular Road, Dhaka, Bangladesh</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600 text-sm">+880 1319-719968</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600 text-sm">info@edusmartpro.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <p className="font-semibold">Support Hours</p>
                      <p className="text-gray-600 text-sm">Monday - Friday: 9AM - 6PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}