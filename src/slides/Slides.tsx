import { CodeBlock } from "@/components/CodeBlock"

export const Slides = () => {
  return (
    <>
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

            <li>Go in Action</li>
            {/* Examples of how to do some things in Go, maybe as vertical slides, might be too much?! */}

            <li>Resources to get you started</li>
            {/* Installation? The Go Tour, language spec, any books? */}
          </ul>

          <p className="mt-8 text-xs">
            Don't worry excited future Gopher, these slides are<br />
            also <a target="_blank" href="https://pres-go-intro.pages.dev">available online</a>
            for you to view later!
          </p>
        </div>
      </section>

      {/* What is Go? */}

      <section data-auto-animate="">
        <h2 className="r-fit-text">What is Go?</h2>
      </section>

      <section className="text-left" data-auto-animate="">
        <h2>What is Go?</h2>
        <p>
          Go is a programming language designed at, and supported by Google, that aims to make it
          easy to build simple, reliable, and efficient software.
        </p>

        <div className="flex gap-4 w-full items-center">
          <div className="w-full">
            <p>It is:</p>
            <ul>
              <li>High-level & Garbage collected</li>
              <li>C-like in syntax</li>
              <li>Statically, and structurally typed</li>
              <li>Compiled</li>
              <li>Efficient and performant</li>
              <li>Easy to learn, read, and write</li>
            </ul>
          </div>

          <div className="w-full">
            <CodeBlock className="mt-4">{`
              package main

              import "fmt"

              func main() {
                fmt.Println("Hello, World!")
              }
            `}</CodeBlock>
          </div>
        </div>

        <aside className="notes">
          <p>
            Structural typing is a class of type system where type compatibility and equivalence are
            determined by the type's actual structure or definition and not by other characteristics
            such as the name given to the type.
          </p>
        </aside>
      </section>

      <section className="text-left" data-auto-animate="">
        <h2>History</h2>
        <p>
          Go was built to address issues that Google faced with other languages they use; in
          particular, to improve productivity in an era of multicore processors, networked systems,
          and large codebases.
        </p>
        <p>
          The designers of the language had some specific goals in mind. They wanted a clean, small,
          compiled language with modern features.
        </p>
        <p>
          They identified some specific issues with other languages to address:
        </p>
        <ul>
          <li>Complexity (of the language, tooling, and ecosystem)</li>
          <li>Missing or poor concurrency support</li>
          <li>Lack of scalability</li>
          <li>"Insane" build times</li>
        </ul>

        <aside className="notes">
          <p>
            Go is very much a "batteries-included" language.
          </p>
          <p>
            Go was initially built in 2007 and subsequently released to the public in 2009.
          </p>
          <p>
            Lack of scalability here refers to the ability to write and maintain large codebases,
            scaling up to large teams, and large systems. Orthogonality is key here, AKA Go is
            "boring". It's about expressing algorithms (and business logic), not the type system.
          </p>
          <p>
            The story goes that Go was designed while waiting for other programs to compile.
          </p>
        </aside>
      </section>

      {/* End What is Go? */}

      {/* Why use Go? */}

      <section>
        <h2 className="r-fit-text">Why use Go?</h2>
      </section>

      {/* End Why use Go? */}

      {/* Who's using Go? */}

      <section>
        <h2 className="r-fit-text">Who's using Go?</h2>
      </section>

      {/* End Who's using Go? */}

      {/* Go in Action */}

      <section>
        <h2 className="r-fit-text">Go in Action</h2>
      </section>

      {/* End Go in Action */}

      {/* Resources to get you started */}

      <section>
        <h2 className="r-fit-text">Resources to get you started</h2>
      </section>

      {/* End Resources to get you started */}

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
    </>
  )
}
