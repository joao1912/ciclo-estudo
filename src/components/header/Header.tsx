import React from 'react'
import "./Header.css"

function Header(): React.JSX.Element {
  return (
    <header>
        <button>
            Criar
        </button>
        <button>
            Meu Ciclo
        </button>
        <button>
            Editar
        </button>
    </header>
  )
}

export default Header
