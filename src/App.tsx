import { Deck } from "@/components/Deck"

import "highlight.js/styles/atom-one-dark.css"
import "@/theme.css"

export const App = () => {
  return (
    <Deck>
      <section>
        <h1>An Introduction to Go</h1>
        <p className="opacity-70 text-sm">Elliot Wright // 2024</p>
      </section>

      <section>
        <div className="text-left w-fit mx-auto">
          <h2>What we're about to cover</h2>

          <ul>
            <li>What is Go?</li>
            {/* Including some history, and the principles behind the language*/}

            <li>Why use Go?</li>
            {/* Cover language itself, tooling, ecosystem, etc. Easy to learn, great for teams. */}

            <li>Who's using Go?</li>
            {/* ITG! Don't take my word for it; these big companies are using it. What for? */}

            <li>Resources to get you started</li>
            {/* Installation? The Go Tour, language spec, any books? */}
          </ul>

          <p className="mt-8 text-xs">
            Don't worry excited future Gopher, these slides are<br />
            also <a href="#">available online</a> for you to view later!
          </p>
        </div>
      </section>

      <section>
        <h2 className="r-fit-text">What is Go?</h2>
      </section>

      <section>
        <h2 className="r-fit-text">Why use Go?</h2>
      </section>

      <section>
        <h2 className="r-fit-text">Who's using Go?</h2>
      </section>

      <section>
        <h2 className="r-fit-text">Resources to get you started</h2>
      </section>

      <section className="text-left">
        <h2>References</h2>
        <p>
          <a target="_blank" href="https://go.dev/">
            https://go.dev/
          </a>
        </p>
        <p>
          <a target="_blank" href="https://benhoyt.com/writings/go-intro/">
            https://benhoyt.com/writings/go-intro/
          </a>
        </p>
        <p>
          <a target="_blank" href="https://go.dev/doc/go1compat">
            https://go.dev/doc/go1compat
          </a>
        </p>
        <p>
          <a target="_blank" href="https://www.informit.com/articles/article.aspx?p=1623555">
            https://www.informit.com/articles/article.aspx?p=1623555
          </a>
        </p>
        <p>
          <a target="_blank" href="https://survey.stackoverflow.co/2023/#technology-admired-and-desired">
            https://survey.stackoverflow.co/2023/#technology-admired-and-desired
          </a>
        </p>
      </section>
    </Deck>
  )
}
