import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import ProfileStore from "./profileStore";
import userStore from "./userStore";

interface Store {
    activityStore: ActivityStore
    commonStore: CommonStore
    userStore: userStore
    modalStore: ModalStore
    profileStore: ProfileStore
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new userStore(),
    modalStore: new ModalStore(),
    profileStore: new ProfileStore()
}

export const StoreContext = createContext(store);

export function useStore (){
    return useContext(StoreContext);
}