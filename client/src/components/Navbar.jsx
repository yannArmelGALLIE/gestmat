import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

export default function Navbar() {
    return (
        <header>
            <h1>GestMat</h1>
            <div>
                <SignedOut>
                    <SignInButton mode='modal'>
                        <button>Se connecter</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </header>
    )
}