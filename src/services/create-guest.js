function createGuest(wedding, user) {
    localStorage.setItem("WEDDING", wedding || null);
    localStorage.setItem("USER_WEDDING", user || null);
}

export default createGuest;
