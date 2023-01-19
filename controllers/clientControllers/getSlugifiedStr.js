import slugify from "slugify";
import { stopwords } from "../../helpers/constants";

const getSlugifiedStr = (stringValue) => {
  const withoutStopWords = stringValue?.toLowerCase().replace(new RegExp('\\b(' + stopwords.join('|') + ')\\b', 'g'), '');
  const slugifiedString = slugify(withoutStopWords, {
      replacement: '-',
      remove: undefined,
      lower: true,
      strict: true,
      locale: 'vi',
      trim: true,
  })
  return slugifiedString
}
export default getSlugifiedStr;