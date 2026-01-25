const footerLinks = {
  products: [
    { name: 'Find Parking', href: '#products' },
    { name: 'Image Converter', href: '#products' },
    { name: 'Cozy Sound', href: '#products' },
    { name: 'Financial Planning', href: '#products' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Code Nour</h3>
            <p className="text-sm text-gray-600">Software for everyone.</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-medium mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-gray-900 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="mailto:codenour@gmail.com"
                  className="hover:text-gray-900 transition-colors"
                >
                  codenour.dev@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Code Nour. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
