import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

type ButtonProps = {
  type: "button" | "submit"
  title: string
  icon?: string
  variant: string
  action: "download" | "contact" | "read more" | "view code"
  href?: string
}

interface FormData {
  name: string
  email: string
  message: string
}

const Button = ({ type, title, icon, variant, action, href }: ButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    if (action === "contact") {
      setIsModalOpen(true)
    }
  }

  const buttonContent = (
    <>
      <label className="font-medium whitespace-nowrap cursor-pointer">
        {title}
      </label>
      {icon && <Image src={icon} alt={title} width={16} height={16} />}
    </>
  )

  if (action === "download" && href) {
    return (
      <Link legacyBehavior href={href} download={`${title}.pdf`}>
        <a
          className={`flex items-center justify-center gap-2 rounded-full border ${variant}`}
        >
          {buttonContent}
        </a>
      </Link>
    )
  }
  return (
    <>
      <button
        className={`flex items-center justify-center gap-2 rounded-full border ${variant}`}
        type={type}
        onClick={handleClick}
      >
        {buttonContent}
      </button>
      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}

// Modal
const ContactModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const router = useRouter()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, email, message } = formData
    const mailtoLink = `mailto:silaschan421@gmail.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name}%0D%0AEmail: ${email}`
    router.push(mailtoLink)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl w-full max-w-md shadow-2xl transform transition-all">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Button
