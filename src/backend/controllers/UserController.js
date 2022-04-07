import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

/**
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting user.
 * send GET Request at /api/user/
 * */
export const getUserHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"]
        }
      );
    }
    return new Response(200, {}, { user });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error
      }
    );
  }
};
