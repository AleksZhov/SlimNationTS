import { FC } from "react";
import ConsumptionDiary from "Presentation/View/consumptionDiary/ConsumptionDiaryView";


const HomePage: FC = () => {
    return (<main className="bg-main-page-bgnd h-screen bg-cover bg-center">
        <h1>HomePage</h1>
        <ConsumptionDiary/>
    </main>)
}
export default HomePage;