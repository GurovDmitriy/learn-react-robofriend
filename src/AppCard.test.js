import { render, screen } from "@testing-library/react"
import AppCard from "./AppCard"

test("renders email", () => {
  render(<AppCard />)
  const email = screen.getByText(/gmail/i)
  expect(email).toBeInTheDocument()
})
