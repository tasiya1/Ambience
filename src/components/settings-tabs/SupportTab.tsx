
function SupportTab() {
    return (<>
        <h3>Support</h3>
        <p>Found bugs? Or got any ideas? Contact below 👇🏼</p>

        <form className="contact-devs-form">
            <input className="contact-devs-name" name="name" placeholder="Your name"></input>

            <input className="contact-devs-topic" placeholder="Topic of your letter (e.g. I found a bug)"></input>

            <textarea className="contact-devs-letter" placeholder="Describe your problem"></textarea>

            <button type="submit" disabled={true} title="Currently unavailable">Send</button>
        </form>

        <h3>What's new?</h3>
        
    </>)
}

export default SupportTab