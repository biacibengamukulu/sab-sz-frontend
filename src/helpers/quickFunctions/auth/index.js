import useModels from "../../../models";

const useAuth = () =>{
    const {useSelectors} = useModels();
    const {useSelector,useAuthSelectors} = useSelectors();
    const {session:sessionSelector} = useAuthSelectors();
    const session = useSelector(sessionSelector)



    return {
        getSession:session
    }

}
export default useAuth;
