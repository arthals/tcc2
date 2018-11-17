﻿using System;
using TCC.Dominio.Base;

namespace TCC.WebService.Exceptions
{
    public class ExceptionPayload
    {
        public int ErrorCode { get; set; }

        public string ErrorMessage { get; set; }

        public static ExceptionPayload New<T>(T exception) where T : Exception
        {
            int errorCode;
            if (exception is DomainException)
                errorCode = (exception as DomainException).CodigosDeErro.GetHashCode();
            else
                errorCode = CodigosDeErro.Unhandled.GetHashCode();
            return new ExceptionPayload
            {
                ErrorCode = errorCode,
                ErrorMessage = exception.Message,
            };
        }
    }
}