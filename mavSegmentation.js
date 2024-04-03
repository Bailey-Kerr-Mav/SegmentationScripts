<script language='javascript'> window.role={
"user_name" : "#{securityContext.userName}",
"Employee":#{securityContext.userInRole['ORA_PER_EMPLOYEE_ABSTRACT']},
"LineManager":#{securityContext.userInRole['ORA_PER_LINE_MANAGER_ABSTRACT']},
"HR_Analyst":#{securityContext.userInRole['ORA_PER_HUMAN_RESOURCE_ANALYST_JOB']},
"General_Accountant":#{securityContext.userInRole['ORA_GL_GENERAL_ACCOUNTANT_JOB']}
};
</script>
