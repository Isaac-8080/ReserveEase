
const Footer = () => {
  return (
    <>
      <footer className="bg-[#F2F2F2] dark:bg-[#111827] py-8">

        {/* Copyright Section */}
        <div className="pt-4 text-center">
          <p className="text-md">&copy; {new Date().getFullYear()} ReserveEase. All Rights Reserved.</p>
        </div>

      </footer>
    </>
  );
}

export default Footer;
