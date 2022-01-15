import { Component, Vue } from 'vue-property-decorator';

@Component
export class ComponentB extends Vue {
    render() {
        return <div>ComponentB</div>
    }
}