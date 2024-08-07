import { LIST_LANGUAGES } from '@/utils/constants/list-languages';
import { searchLogic } from './searchLogic';
import Loader from '@/components/Loader/Loader';

const SearchWord = () => {
  const { language, loading, search, setSearch, setLanguage, onSubmit } =
    searchLogic();

  return (
    <form
      className="container__search-word"
      onSubmit={async (e) => await onSubmit(e)}
    >
      <fieldset>
        <legend>
          {' '}
          <span className="styled">Digite</span> a palavra que você deseja
          traduzir:
        </legend>
        <input
          type="text"
          placeholder="exemplo: love"
          required
          value={search}
          minLength={2}
          onChange={(e) => setSearch(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend>
          Escolha o idioma para <span className="styled">traduzir</span>:
        </legend>
        <select
          id="language-output"
          name="language-output"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {LIST_LANGUAGES.map((language, key) => (
            <option key={key} value={language}>
              {language}
            </option>
          ))}
        </select>
      </fieldset>

      <button type="submit">PEQUISAR</button>

      {loading && <Loader />}
    </form>
  );
};

export default SearchWord;
