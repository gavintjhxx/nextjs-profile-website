export default function ProfileWidget() {
    return (
        <div>
            <img className="h-48 w-48 m-auto rounded-full mt-14 shadow-lg" src="/static/pfp.png"></img>
            <h1 className="text-center leading-loose text-4xl text-titles">Zloth</h1>
            <p className="text-texts text-l text-center leading-snug">
                A Cybersecurity student,<br />
                Verified Discord Bot Developer and<br />
                Freelance Developer.
            </p>
            <p className="text-texts text-xs text-center mt-2">
                Profile Picture made by TerrorNE
            </p>
        </div>
    )
}