import { convertTheDate, getAge } from "../helpers.js";

export const User = (UserObject) => {
    const convertedDOB = convertTheDate(UserObject.dob.date);
    const convertedRegisteredDate = convertTheDate(UserObject.registered.date);

    return `<section class="user-photo__block"><img src="${UserObject.picture.large}" alt="${UserObject.name.first} ${UserObject.name.last}" class="user__photo"></section>
    <section class="name__block">
        <h2 class="users-name">${UserObject.name.first} ${UserObject.name.last}</h2>
    </section>
    <section class="user-contact-info__block">
        <h3 class="section__title">Contact Info</h3>
        <section class="phone-number__block">Phone: <a class="phone-number" href="tel:+${UserObject.phone}">${UserObject.phone}</a></section>
        <section class="cell-phone-number__block">Mobile: <a class="cell-phone-number" href="tel:+${UserObject.cell}">${UserObject.cell}</a></section>
        <section class="user-email-address__block">Email: <a class="user-email-address" href="mailto:${UserObject.email}">${UserObject.email}</a></section>
        <section class="user-location__block">
            <h3 class="location-block__title">Location</h3>
            <address>
                <h4 class="address-element__title">Address</h4>
                <span class="street-address">${UserObject.location.street.number} ${UserObject.location.street.name}</span><br>
                <span class="city-state-postcode">${UserObject.location.city}, ${UserObject.location.state} ${UserObject.location.postcode}</span><br>
                <span class="country">${UserObject.location.country} <br>Country Code: ${UserObject.nat}</span><br>
                <span class="location-coordinates">Get Directions to ${UserObject.name.first}: ${UserObject.location.coordinates.latitude}, ${UserObject.location.coordinates.longitude}</span>
            </address>
            <section class="timezone">Timezone: ${UserObject.location.timezone.offset}, ${UserObject.location.timezone.description}</section>
        </section>
    </section>
    <section class="personal-info__block">
        <section class="gender">Identifies as: ${UserObject.gender}</section>
        <section class="user__birthday-age">DOB: ${convertedRegisteredDate}, Age: ${getAge(convertedRegisteredDate)}</section>

    </section>
    <section class="membership-info__block">
        <section class="registered__date">Signedup: ${convertedRegisteredDate}, ${getAge(UserObject.registered.age)} Years of Membership</section>

    </section>`

}