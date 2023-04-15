import SectionShared from "../section_shared";
import AppTitle from "../shared_title";

export default function FirstIntro() {
    return <SectionShared viewHeight={'90vh'} child={<AppTitle titleText={"Who We Are?"} />
    } />;
}