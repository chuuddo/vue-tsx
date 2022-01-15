import { Vue, Component } from 'vue-property-decorator';
import { ComponentA } from './components/ComponentA';

@Component
export class App extends Vue {
    render() {
        return (
            <div>
                <ComponentA/>
            </div>
        )
    }
}
