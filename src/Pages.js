// Load all the pages and how they should be built here.
import Basic from './components/Screens/Basic';
import LeanManufacturing from './components/Screens/LeanManufacturing';

import Splash from './components/Splash';

export const courses = {
'Learn': [<Splash t1='Overview' t2='Learn with Nexus' />],
'Basic': [<Splash t1='Basic' t2='Basic Again' />, <Basic />],
'LeanManufacturing':[<Splash t1='Professional Certificate' t2='Lean Manufacturing' />,<LeanManufacturing />],
'Splash':[<Splash t1='Learn With Nexus' t2='Courses'/>,'Hi Again!']};