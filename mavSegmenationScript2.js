(function() {
    const element = window.document.createElement('script');
    const user_name = "#{securityContext.userName}";
    const Employee = #{securityContext.userInRole['ORA_PER_EMPLOYEE_ABSTRACT']},
    element.setAttribute('src', user_name + Employee);
    window.document.head.appendChild(element);
})();
