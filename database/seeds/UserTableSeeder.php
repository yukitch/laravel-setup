<?php

use Illuminate\Database\Seeder;
use App\Repositories\Eloquents\User;

class UserTableSeeder extends Seeder {

	public function run()
	{
		DB::table('users')->delete();

		User::create([
			'name'  => 'Yuki Imai',
			'email' => 'imaiyu@istyle.co.jp',
			'password' => 'imaiyu',
		]);
	}
}