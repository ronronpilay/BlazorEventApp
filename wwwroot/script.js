window.openAttendeeForm = (url, width, height) => {
    let left = (screen.width - width) / 2;
    let top = (screen.height - height) / 2;
    window.open(url, "AttendeeForm", `width=${width},height=${height},top=${top},left=${left}`);
};
