<?php
declare(strict_types=1);

// Stytch SDK utility: result_headers

class StytchResultHeaders
{
    public static function call(StytchContext $ctx): ?StytchResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
