import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Buscar conteúdo" />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
      </button>
    </SearchFormContainer>
  )
}
