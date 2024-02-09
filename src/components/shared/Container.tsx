import { PropsWithChildren } from "react";

function Conatiner({ children }: PropsWithChildren) {
    return (
        <div className="grid grid-cols-4 tablet:grid-cols-8 desktop:grid-cols-12 max-w-mobile tablet:max-w-tablet desktop:max-w-desktop m-auto gap-6">
            {children}
        </div>
    );
}

export default Conatiner;
