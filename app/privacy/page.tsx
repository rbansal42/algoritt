'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-work tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-work max-w-2xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto prose prose-invert prose-lg 
              prose-headings:font-work 
              prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:font-bold prose-h2:text-purple-400 prose-h2:mb-6
              prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:font-semibold prose-h3:text-gray-200 prose-h3:mt-8
              prose-h4:text-lg prose-h4:sm:text-xl prose-h4:font-medium prose-h4:text-gray-100
              prose-p:font-work prose-p:text-gray-300 prose-p:leading-relaxed
              prose-li:font-work prose-li:text-gray-300
              prose-strong:text-purple-400
              prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300"
          >
            <div className="space-y-8">
              <p>
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <p>
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>

              <h2>Interpretation and Definitions</h2>
              <h3>Interpretation</h3>
              <p>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3>Definitions</h3>
              <p>For the purposes of this Privacy Policy:</p>
              <ul>
                <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong>Company</strong> (referred to as either &ldquo;the Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo; in this Agreement) refers to Finresourcing LLC (DBA Algoritt Consulting), One World Trade Center, Suite 8500, New York, NY, 10007, United States.</li>
                <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of your browsing history on that website among its many uses.</li>
                <li><strong>Country</strong> refers to: New York, United States</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
                <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li>
                <li><strong>Website</strong> refers to Algoritt, accessible from https://algoritt.com/</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>

              <h2>Collecting and Using Your Personal Data</h2>
              <h3>Types of Data Collected</h3>
              <h4>Personal Data</h4>
              <p>
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
              </p>
              <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Usage Data</li>
              </ul>

              <h3>Usage Data</h3>
              <p>
                Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </p>

              <h2>Tracking Technologies and Cookies</h2>
              <p>
                We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
              </p>

              <h2>Use of Your Personal Data</h2>
              <p>The Company may use Personal Data for the following purposes:</p>
              <ul>
                <li>To provide and maintain our Service</li>
                <li>To manage Your Account</li>
                <li>For the performance of a contract</li>
                <li>To contact You</li>
                <li>To provide You with news and offers</li>
                <li>To manage Your requests</li>
                <li>For business transfers</li>
                <li>For other purposes such as data analysis</li>
              </ul>

              <h2>Security of Your Personal Data</h2>
              <p>
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
              </p>

              <h2>Children&apos;s Privacy</h2>
              <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, You can contact us at:
              </p>
              <ul>
                <li>By visiting our contact page: <a href="/contact" className="text-purple-400 hover:text-purple-300">https://algoritt.com/contact</a></li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 