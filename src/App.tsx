import { Deck } from "@/components/Deck"
import { Slides } from "@/slides/Slides"

import "highlight.js/styles/atom-one-dark.css"
import "@/theme.css"

export const App = () => {
  return (
    <Deck>
      <Slides />
    </Deck>
  )
}
