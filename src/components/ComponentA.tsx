import { Component, Vue } from 'vue-property-decorator';

@Component
export class ComponentA extends Vue {
    render() {
        return <div>ComponentA</div>
    }
}