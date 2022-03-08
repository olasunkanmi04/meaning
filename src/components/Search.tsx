import Loader from "../assets/icons/spinner.svg";

interface Props {
  word: string;
  setWord: (word: string) => void;
  searchWord: any;
  loader: boolean;
}
export const Search = ({ word, setWord, searchWord, loader }: Props) => {
  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        searchWord(word);
      }}
    >
      <input
        type="text"
        value={word}
        onChange={(e) => {
          setWord(e.target.value);
        }}
        placeholder="Type any word here"
        className="search__input"
        required
      />
      <button disabled={loader} type="submit" className="cta_btn search__btn">
        {loader && <img src={Loader} alt="loader" className="cta_btn-loader" />}
        Search
      </button>
    </form>
  );
};
