import { defineComponent } from "vue";
import Welcome from "./components/Welcome";

export default defineComponent({
    name: 'App',
    props: {
    },
    setup() {
        return () => <div>
            <Welcome name="Owen" />
        </div>;
    },
});
