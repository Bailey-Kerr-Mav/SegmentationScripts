(function() {
  const div = window.document.createElement('div');
  div.id = "apty_role_segment";

  // Assuming securityContext object is available
  const employee = securityContext.userInRole['ORA_PER_EMPLOYEE_ABSTRACT'] || "false";
  const linemanager = securityContext.userInRole['ORA_PER_LINE_MANAGER_ABSTRACT'] || "false";
  const hrAnalyst = securityContext.userInRole['ORA_PER_HUMAN_RESOURCE_ANALYST_JOB'] || "false";
  const generalAccountant = securityContext.userInRole['ORA_GL_GENERAL_ACCOUNTANT_JOB'] || "false";
  const userName = securityContext.userName;

  // Set attributes directly for better separation of data and presentation
  div.setAttribute("employee", employee);
  div.setAttribute("linemanager", linemanager);
  div.setAttribute("hr_analyst", hrAnalyst);
  div.setAttribute("general_accountant", generalAccountant);
  div.setAttribute("user_name", userName);

  window.document.body.appendChild(div);
})();
