import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-6">The page you are looking for does not exist.</p>
      <Link to="/" className="text-primary hover:underline">
        Return to Home
      </Link>
    </div>
  )
}

export default NotFound 