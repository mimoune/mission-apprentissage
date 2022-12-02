import { render, screen } from '@testing-library/react'
import Home from '../pages/Home'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a Home content', () => {
    render(<Home />)

    expect(screen.getByRole('heading')).toHaveTextContent(
      /Catalogue des Services/
    )
    expect(screen.getByRole('button', { name: 'openSideBar' })).toBeDisabled()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
