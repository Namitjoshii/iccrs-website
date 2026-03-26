const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">

        <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b pb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Institute of Civilisational & Cultural Relations (ICCR Global) respects
          your privacy and is committed to protecting your personal information.
        </p>

        {/* Section */}
        <div className="space-y-6">

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Information Collection
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We collect personal information such as name, email address, phone
              number, and country when you submit forms or express interest in our
              programs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Use of Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your information is used to provide program details, respond to
              inquiries, and communicate relevant updates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Data Protection
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We take appropriate measures to ensure your data is secure and
              protected.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Third-Party Sharing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell or share your personal information with third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Consent
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By submitting your information, you agree to be contacted by ICCR
              Global regarding programs and related opportunities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Contact
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For any queries, please contact us at{" "}
              <a
                href="mailto:ntyagi@iccrglobal.org"
                className="text-blue-600 font-medium hover:underline"
              >
                ntyagi@iccrglobal.org
              </a>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;