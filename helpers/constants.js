import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from '@mui/icons-material/Help';
import QueueIcon from '@mui/icons-material/Queue';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export const adminMenu = [
	{ title: 'Dashboard', Icon: DashboardIcon, link: '/cms/dashboard' },
	{ title: 'Questions', Icon: HelpIcon, link: '/cms/dashboard/questions' },
	{ title: 'Add Question', Icon: QueueIcon, link: '/cms/dashboard/questions/add' },
	{ title: 'Users', Icon: PersonIcon, link: '/cms/dashboard/users' },
	{ title: 'Add User', Icon: PersonAddAlt1Icon, link: '/cms/dashboard/users/add' },
	{ title: 'Settings', Icon: SettingsIcon, link: '/cms/dashboard/settings' },
	{ title: 'Logout', Icon: LogoutIcon, link: '/cms/dashboard/logout' },
];

export const levelSelect = [
	{ value: 1, title: 'One' },
	{ value: 2, title: 'Two' },
	{ value: 3, title: 'Three' },
	{ value: 4, title: 'Four' },
	{ value: 5, title: 'Five' },
	{ value: 6, title: 'Six' },
	{ value: 7, title: 'Seven' }
]
export const subjectSelect = [
	{ value: 'electrical', title: 'Electrical' },
	{ value: 'math', title: 'Math' },
	{ value: 'grammar', title: 'Grammar' },
	{ value: 'english', title: 'English' },
	{ value: 'gk', title: 'GK' },
];

export const headerPadding = '0 15px';

export const toastConfig = {
	type: 'success',
	position: "bottom-left",
	autoClose: false,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "colored",
}

export const stopwords = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"];