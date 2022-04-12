import SearchIcon from '@mui/icons-material/Search';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import BackspaceIcon from '@mui/icons-material/Backspace';

export const ClickActions = {
    KEY: 'key',
    SEARCH: 'search',
    DELETE: 'delete'
}

const keyboardItems = [
    {
        rows: [
            {
                primaryText:'1',
                secondaryText: VoicemailIcon,
                clickHandler: null,
            },
            {
                primaryText:'2',
                secondaryText: 'a,b,c',
                clickHandler: ClickActions.KEY,
            },
            {
                primaryText:'3',
                secondaryText: 'd,e,f',
                clickHandler: ClickActions.KEY,
            }
        ]
    },
    {
        rows: [
            {
                primaryText:'4',
                secondaryText: 'g,h,i',
                clickHandler: ClickActions.KEY,
            },
            {
                primaryText:'5',
                secondaryText: 'j,k,l',
                clickHandler: ClickActions.KEY,
            },
            {
                primaryText:'6',
                secondaryText: 'm,n,o',
                clickHandler: ClickActions.KEY,
            }
        ]
    },
    {
        rows: [
            {
                primaryText:'7',
                secondaryText: 'p,q,r,s',
                clickHandler: ClickActions.KEY,
            },
            {
                primaryText:'8',
                secondaryText: 't,u,v',
                clickHandler: ClickActions.KEY,
            },
            {
                primaryText:'9',
                secondaryText: 'w,x,y,z',
                clickHandler: ClickActions.KEY,
            }
        ]
    },
    {
        rows: [
            {
                primaryText: BackspaceIcon,
                secondaryText: 'delete',
                clickHandler: ClickActions.DELETE,
            },
            {
                primaryText:'0',
                clickHandler: null,

            },
            {
                primaryText: SearchIcon,
                secondaryText: 'search',
                clickHandler: ClickActions.SEARCH,
            }
        ]
    },
]

export default keyboardItems;