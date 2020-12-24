import { AppHeader } from './cmps/app-header.jsx';
import { About } from './pages/about.jsx';
import { Home } from './pages/home.jsx';
import { KeepApp} from './apps/Keep/pages/KeepApp.jsx'
import { MailApp} from './apps/Mail/pages/MailApp.jsx'
import { MailAdd} from './apps/Mail/pages/MailAdd.jsx'
import { MailDetails} from './apps/Mail/pages/MailDetails.jsx'

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;


// Simple React Component
export class App extends React.Component {


    render() {
        return (
            <Router>
                <section className="app">
                    <AppHeader />
                    <Switch>

                        <Route path="/mail/add/:mailId?" component={MailAdd} />
                        <Route path="/mail/:mailId" component={MailDetails} />
                        <Route path="/about" component={About} />
                        <Route path="/mail" component={MailApp} />
                        <Route path="/keep" component={KeepApp} />
                        <Route path="/" component={Home} />
                    </Switch>

                </section>
            </Router>
        );
    }
}


