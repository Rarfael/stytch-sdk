<?php
declare(strict_types=1);

// Stytch SDK utility: result_body

class StytchResultBody
{
    public static function call(StytchContext $ctx): ?StytchResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
