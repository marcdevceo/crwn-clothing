import { signInWithGooglePopup, createUserDocFromAuth } from "../../../Utils/Firebase/Firebase";


const SignIn = () => {
    const logGoogleUser = async() => {
        const { user } = await signInWithGooglePopup();
       const userDocRef = await createUserDocFromAuth(user); 
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup             
            </button>
        </div>
    );
};

export default SignIn; 