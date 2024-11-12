import { useState } from "react"

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" })

  const showAlert = ({ text, type = "danger" }) =>
    setAlert({ show: true, text, type })
  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" })

  const Alert = ({ type, text }) => {
    return (
      <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
        <div
          className={`p-2 ${
            type === "danger" ? "bg-red-800" : "bg-blue-800"
          } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`}
          role="alert"
        >
          <p
            className={`flex rounded-full ${
              type === "danger" ? "bg-red-500" : "bg-blue-500"
            } uppercase px-2 py-1 text-xs font-semibold mr-3`}
          >
            {type === "danger" ? "Failed" : "Success"}
          </p>
          <p className="mr-2 text-left">{text}</p>
        </div>
      </div>
    )
  }

  return { alert, showAlert, hideAlert, Alert }
}

export default useAlert
