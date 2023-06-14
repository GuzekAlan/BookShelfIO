import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { Dispatch, SetStateAction } from "react";

declare global{
    namespace ReactNavigation{
        interface RootParamList extends StackParamList{}
    }
}

export type StackParamList = {
    'Find Book': undefined,
    'Books': undefined,
    'AccountStack': undefined,
    'LoggedProfile': undefined

}

export type RootStackScreenProps<Screen extends keyof StackParamList> = NativeStackScreenProps<StackParamList, Screen>;