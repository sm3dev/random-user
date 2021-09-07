import { convertTheDate } from "../helpers.js";

export const User = (UserObject) => {
    const convertedDOB = convertTheDate(UserObject.dob.date);
    const convertedRegisteredDate = convertTheDate(UserObject.registered.date);

    return `<section class="user-photo__block"><img src="${UserObject.picture.thumbnail}" alt="name.first name.last" class="user__photo"></section>
    <section class="name__block">
        <h2 class="users-name">name.title name.first name.last</h2>
    </section>
    <section class="user-contact-info__block">
        <h3 class="section__title">Contact Info</h3>
        <section class="phone-number__block"><a class="phone-number" href="tel:+phone">Phone: phone</a></section>
        <section class="cell-phone-number__block"><a class="cell-phone-number" href="tel:+cell">Mobile: cell</a></section>
        <section class="user-email-address__block"><a class="user-email-address" href="mailto:email">Email: email</a></section>
        <section class="user-location__block">
            
            <h3 class="location-block__title">Location</h3>
            <address>
                <h4 class="address-element__title">Address</h4>
                <span class="street-address">location.street.number location.street.name</span></address><br>
                <span class="city-state-postcode">location.city, location.state location.postcode</span><br>
                <span class="country">location.country, Country Code: nat</span><br>
                <span class="location-coordinates">Get Directions to name.first: location.coordinates.latitude location.coordinates.longitude</span>
            </address>
            <section class="timezone">Timezone: timezone.offset, timezone.description</section>
        </section>
    </section>
    <section class="personal-info__block">
        <section class="gender">Identifies as: gender</section>
        <section class="user__birthday-age">DOB: dob.date, Age: dob.age</section>

    </section>
    <section class="membership-info__block">
        <section class="registered__date">Signedup: registered.date, registered.age Years of Membership</section>

    </section>`

}